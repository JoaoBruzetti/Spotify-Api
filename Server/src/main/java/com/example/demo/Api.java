package com.example.demo;
import java.io.Serializable;
import lombok.*;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Api implements Serializable{

    private String Client_ID =  "e9fbd2df63c94ea68644daac5783b7d5";
    private String Client_Secret = "3c635278395d46fe89d747c0a160d68b";
    
}
