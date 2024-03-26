package com.java.bdayparty.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.Theme;

@Service
public interface ThemeService {
    List<Theme> getAllThemes();
    Optional<Theme> getThemeById(String themeId);
    Theme createTheme(Theme theme);
    Optional<Theme> updateTheme(String themeId, Theme theme);
    void deleteTheme(String themeId);
    
}
