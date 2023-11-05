export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees()
            .then(data => setEmployees(data))
            .catch(error => console.error("Error fetching employees:", error));
    }, [setEmployees]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};