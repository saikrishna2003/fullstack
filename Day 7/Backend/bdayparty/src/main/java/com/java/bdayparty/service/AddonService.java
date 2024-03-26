package com.java.bdayparty.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.Addon;

@Service
public interface AddonService {
    List<Addon> getAllAddons();
    Optional<Addon> getAddonById(String addonId);
    Addon createAddon(Addon addon);
    Optional<Addon> updateAddon(String addonId, Addon addon);
    void deleteAddon(String addonId);
    
}
