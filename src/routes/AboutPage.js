import React, { useState, useEffect } from 'react';
import StudentForm from '../components/studentForm';
import StudentTable from '../components/studentTable';
import ConfirmationModal from '../components/confirmationModal';
import StatisticsCard from '../components/StatisticsCard ';


function AboutPage() {
    const [students, setStudents] = useState([]);
    const [show, setShow] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [studentIdToDelete, setStudentIdToDelete] = useState(null);

    // Handler to prompt the user before deleting
    const handleDeletePrompt = (studentId) => {
        setStudentIdToDelete(studentId);
        setIsModalOpen(true);
    };


    // function downloadAsPDF() {
    //     const element = document.getElementById('customers'); // Assume the table has this ID
    //     const opt = {
    //       margin:       10,
    //       filename:     'students.pdf',
    //       image:        { type: 'jpeg', quality: 0.98 },
    //       html2canvas:  { scale: 2 },
    //       jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    //     };
      
    //     html2pdf().from(element).set(opt).save();
    //   }

    // Handler for when the user confirms the delete action
    const handleModalConfirm = async () => {
        if (studentIdToDelete) {
            handleDelete(studentIdToDelete);
        }
        setIsModalOpen(false);
        setStudentIdToDelete(null);
    };

    // Handler for when the user cancels the delete action
    const handleModalCancel = () => {
        setIsModalOpen(false);
        setStudentIdToDelete(null);
    };



    //to filtering the items selectbox
    const [filterItem, setFilterItem] = useState('All'); // New state for filter
    let displayedStudentser = [...students]; // By default, show all students

    // Apply the filter based on the filterItem state
    if (filterItem === 'wheelchair') {
        displayedStudentser = displayedStudentser.filter(student => student.purchasedItem === 'wheelchair');
    } else if (filterItem === 'waterbed') {
        displayedStudentser = displayedStudentser.filter(student => student.purchasedItem === 'waterbed');
    }

    function startEdit(student) {
        setEditingStudent(student);
        setShow(true);
    }

    //function to format the date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    //function to get the number of days so far
    function daysSince(dateString) {
        const now = new Date(); // Current date
        const givenDate = new Date(dateString); // Parsing the given date

        // Difference in milliseconds
        const differenceInMilliseconds = now - givenDate;

        // Converting the difference to days
        const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
        return differenceInDays;
    }


    useEffect(() => {
        // Fetch students from the backend
        fetch('http://localhost:4000/student/students')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error("Error fetching students:", error));

    }, []);

    async function handleDelete(studentId) {

        try {
            await fetch(`http://localhost:4000/student/students/${studentId}`, {
                method: 'DELETE',
            });

            // If delete was successful, update the UI by filtering out the deleted student
            const updatedStudents = students.filter(student => student._id !== studentId);
            setStudents(updatedStudents);
        } catch (error) {
            console.error("Error deleting student: ", error);
        }
    }

    const handleAddStudent = async (newData) => {
        if (editingStudent) {
            try {
                const response = await fetch(`http://localhost:4000/student/students/${editingStudent._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newData),
                });
                const updatedStudent = await response.json();
                setStudents(prevStudents =>
                    prevStudents.map(student => student._id === updatedStudent._id ? updatedStudent : student)
                );
            } catch (error) {
                console.error("Error updating student:", error);
            }
            setEditingStudent(null);
            setShow(false);
        } else {
            setStudents([...students, newData]);
        }
    };
    const numberOfStudents = students.length;

    const filteredStudentsbyItem = students.filter(student => student.purchasedItem === "wheelchair");
    const filteredStudentsbywaterbed = students.filter(student => student.purchasedItem === "waterbed");
    const filteredStudentsbywalkingstick = students.filter(student => student.purchasedItem === "walkingstick");
    const filteredStudentsheart = students.filter(student => student.purchasedItem === "oxygencylinder");
    
    const wheelchairUsersCount = filteredStudentsbyItem.length;
    const waterbedcount = filteredStudentsbywaterbed.length
    const walkingstickpatinet = filteredStudentsbywalkingstick.length
    const heartpatient = filteredStudentsheart.length

    const displayedStudents = students.filter(student => {
        return (
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.purchasedItem.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    
    );

    return (
        <div className="studentform dashboard">


            <div className='statistics'>
            <StatisticsCard title="Total Patients" count={numberOfStudents} variationPercentage={9} iconName="people" />
            <StatisticsCard title="Wheel Chair Patients" count={wheelchairUsersCount} variationPercentage={12} iconName="accessible" />
            <StatisticsCard title="Bed Patients" count={waterbedcount} variationPercentage={17} iconName="hotel" />
            <StatisticsCard title="Walking Disability Patients" count={walkingstickpatinet} variationPercentage={82} iconName="people" />
            <StatisticsCard title="Heart Patients" count={heartpatient} variationPercentage={22} iconName="people" />
            </div>
  

            <h2>Filter by Purchased Item</h2>
            {/* <button onClick={downloadAsPDF}>Download as PDF</button> */}
            <select value={filterItem} onChange={e => setFilterItem(e.target.value)}>
                <option value="All">All</option>
                <option value="wheelchair">Wheelchair</option>
                <option value="waterbed">Waterbed</option>
            </select>
            <button className="button-style" onClick={() => {
                setEditingStudent(null);
                setShow(!show);
            }}>{show ? 'Cancel' : 'Add a Patinet'}</button>
            {show ? <StudentForm onAddStudent={handleAddStudent} editingStudent={editingStudent} /> : null}

            <h2>Patinet List</h2>

            <StudentTable students={displayedStudentser} startEdit={startEdit} handleDelete={handleDeletePrompt} formatDate={formatDate}
                daysSince={daysSince} />

     

            <div>
                <h2>Number of wheel chair users</h2>
               
                <StudentTable students={filteredStudentsbyItem} startEdit={startEdit} handleDelete={handleDeletePrompt} formatDate={formatDate}
                    daysSince={daysSince} />
            </div>
            <h2>seacrh by name</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <StudentTable students={displayedStudents} startEdit={startEdit} handleDelete={handleDeletePrompt} formatDate={formatDate}
                daysSince={daysSince} />
            <ConfirmationModal
                isOpen={isModalOpen}
                message="Are you sure you want to delete this student?"
                onConfirm={handleModalConfirm}
                onCancel={handleModalCancel}
            />

            <div></div>
        </div>


    );

}


export default AboutPage
