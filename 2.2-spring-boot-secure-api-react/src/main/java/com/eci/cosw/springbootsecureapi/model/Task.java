package com.eci.cosw.springbootsecureapi.model;

public class Task {
    private String description;
    private String name;
    private String email;
    private String status;
    private String dueDate;

    public Task() {
    }

    public Task(String description, String name, String email, String status, String dueDate) {
        this.description = description;
        this.name = name;
        this.email = email;
        this.status = status;
        this.dueDate = dueDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }
}
