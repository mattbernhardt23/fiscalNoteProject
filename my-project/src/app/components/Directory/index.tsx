"use client";
import { useState, useEffect } from "react";
import { employees as employeeData } from "@utils/employees";
import { Employee } from "@/app/utils/employeeType";
import { Card, Search } from "@components/index"; // Import the new Card component

export default function Directory() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setEmployees(employeeData);
    }, []);

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-6">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex flex-col space-y-2 mt-4">
                {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((employee) => (
                        <Card key={employee.email} {...employee} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No employees found.</p>
                )}
            </div>
        </div>
    );
}
