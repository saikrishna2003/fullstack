package com.java.bdayparty.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.Theme;
import com.java.bdayparty.repository.ThemeRepository;
import com.java.bdayparty.service.ThemeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ThemeServiceImpl implements ThemeService{
    private final ThemeRepository themeRepository;

    @Override
    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    @Override
    public Optional<Theme> getThemeById(String themeId) {
        return themeRepository.findById(themeId);
    }

    @Override
    public Theme createTheme(Theme theme) {
        return themeRepository.save(theme);
    }

    @Override
    public Optional<Theme> updateTheme(String themeId, Theme updatedtheme) {
        Optional<Theme> exist = themeRepository.findById(themeId);
        if(exist.isPresent()){
            updatedtheme.setThemeid(themeId);
            return Optional.of(themeRepository.save(updatedtheme));
        }
        return Optional.empty();
    }

    @Override
    public void deleteTheme(String themeId) {
        themeRepository.deleteById(themeId);
    }

    
}
