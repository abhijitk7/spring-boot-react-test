package com.name.spring.react.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="client")
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String email;

    public Client(String name, String email) {
        this.name = name;
        this.email = email;
    }

}
