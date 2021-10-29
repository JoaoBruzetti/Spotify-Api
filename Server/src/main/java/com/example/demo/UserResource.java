package com.example.demo;

import org.hibernate.jdbc.Expectations;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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

        @GetMapping("{email}/{senha}")
        public User user(@PathVariable String email,@PathVariable String senha) throws Exception{  
            User user; 
            user = repository.findByEmailAndSenha(email, senha);

            return user;
        }

        @PostMapping("save")
        public User save(@RequestBody User user){
            User createdUser = repository.save(user);
            User returnUser = repository.findByEmailAndSenha(createdUser.getEmail(), createdUser.getSenha());
            return returnUser; 
        }

        @DeleteMapping("{id}")
        public String delete(@PathVariable int id){
            repository.deleteById(id);
            return "Usuario com id " + id + " deletado."; 
        }

    
}
