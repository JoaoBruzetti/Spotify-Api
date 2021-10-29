package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class ApiResource {        

        private final Api api;

        public ApiResource(Api api){
             this.api = api;
        }

        @GetMapping("/acess")
        public Api  Acess(){
            return api;
        }
    
}
