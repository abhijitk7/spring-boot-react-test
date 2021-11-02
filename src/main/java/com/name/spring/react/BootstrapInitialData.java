package com.name.spring.react;

import com.github.javafaker.Faker;
import com.name.spring.react.model.Client;
import com.name.spring.react.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class BootstrapInitialData implements CommandLineRunner {

    @Autowired
    private ClientRepository clientRepository;

    private final Faker faker = new Faker(Locale.getDefault());

    @Override
    public void run(String... args) {
        for (int i = 0; i < 20; i++) {
            this.clientRepository.save(new Client(faker.name().fullName(), faker.internet().emailAddress()));
        }
    }
}
