package com.example.demo;

import org.hibernate.jdbc.Expectations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("users")
public class UserResource {

        private final UserRepository repository;

        public UserResource(UserRepository repository){
             this.repository = repository;
        }

        @GetMapping("/all")
        public List<User>  users(){
            return repository.findAll();
        }

        @PostMapping("/access")
        public User user(@RequestBody User usuario ){  
            usuario.setSenha(Base64.getEncoder().encodeToString(usuario.getSenha().getBytes()));
            User user; 
            user = repository.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
            return user;
        }

        @PostMapping("save")
        public User save(@RequestBody User usuario){
            usuario.setSenha(Base64.getEncoder().encodeToString(usuario.getSenha().getBytes()));
            User createdUser = repository.save(usuario);
            // User returnUser = repository.findByEmailAndSenha(createdUser.getEmail(), createdUser.getSenha());
            return createdUser; 
        }

        @DeleteMapping("/delete")
        public String delete(@RequestBody User usuario ){
            usuario.setSenha(Base64.getEncoder().encodeToString(usuario.getSenha().getBytes()));
            User user; 
            user = repository.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
            repository.deleteById(user.getId());
            return "Usuario deletado com sucesso."; 
        }

    
}
