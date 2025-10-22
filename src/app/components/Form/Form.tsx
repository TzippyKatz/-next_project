"use client"

import { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        birthDate: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        birthDate: ""
    });

    const validation = (name, value) => {
        switch (name) {
            case "name":
                if (!value.trim())
                    return "name field require";
                if (value.trim().split(" ").length < 2)
                    return "name filed has to include full name";
                return "";

            case "phone":
                if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) return "phone includes numbers only";
                return "";

            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "email not valid";
                return "";

            case "birthDate":
                const birth = new Date(value);
                const today = new Date();
                let age = today.getFullYear() - birth.getFullYear();
                const m = today.getMonth() - birth.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
                    age--;
                }
                if (age < 18)
                    return "age has to be over 18 years old.";

            default:
                return "";
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [name]: validation(name, value)
        })
    };

    return (
        <form className={styles.formContent}>
            <div className={styles.field}>
                <input
                    type="text"
                    name="name"
                    placeholder="full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />
                {errors.name && <p className={styles.errorFiled}>{errors.name}</p>}
            </div>

            <div className={styles.field}>
                <input
                    type="text"
                    name="phone"
                    placeholder="0XX-XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />
                {errors.phone && <p className={styles.errorFiled}>{errors.phone}</p>}
            </div>

            <div className={styles.field}>
                <input
                    type="text"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />
                {errors.email && <p className={styles.errorFiled}>{errors.email}</p>}
            </div>

            <div className={styles.field}>
                <input
                    type="date"
                    name="birthDate"
                    placeholder="XX/XX/XX"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className={styles.inputField}
                    required
                />
                {errors.birthDate && <p className={styles.errorFiled}>{errors.birthDate}</p>}
            </div>

        </form >
    )
}