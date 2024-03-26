package com.java.bdayparty.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.bdayparty.model.Theme;
import com.java.bdayparty.service.ThemeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("bdayparty/api/v1/themes")
public class ThemeController {
    private final ThemeService themeService;

     @GetMapping
    public ResponseEntity<List<Theme>> getAllThemes(){
        List<Theme> plans = themeService.getAllThemes();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{themeId}")
    public ResponseEntity<Theme> getThemeById(@PathVariable String themeId){

        Optional<Theme> theme = themeService.getThemeById(themeId);
        return theme.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping()
    public ResponseEntity<Theme> createTheme(@RequestBody Theme theme){
        Theme createTheme = themeService.createTheme(theme);
        return ResponseEntity.status(HttpStatus.CREATED).body(createTheme);
    }

    @DeleteMapping("/{themeId}")
    public ResponseEntity<String> delete(@PathVariable String themeId){
        themeService.deleteTheme(themeId);
        return ResponseEntity.ok("Theme deleted successfully");
    }

    @PutMapping("/{themeId}")
    public ResponseEntity<Theme> updateTheme(@PathVariable String themeId, @RequestBody Theme theme){
        var updatedTheme = themeService.updateTheme(themeId, theme);
        return updatedTheme.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
}
