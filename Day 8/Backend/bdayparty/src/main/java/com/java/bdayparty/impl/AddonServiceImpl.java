package com.java.bdayparty.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.Addon;
import com.java.bdayparty.repository.AddonRepository;
import com.java.bdayparty.service.AddonService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddonServiceImpl implements AddonService{
    
    private final AddonRepository addonRepository;
    
    @Override
    public List<Addon> getAllAddons() {
       return addonRepository.findAll();
    }

    @Override
    public Optional<Addon> getAddonById(String addonId) {
      return addonRepository.findById(addonId);
    }

    @Override
    public Addon createAddon(Addon addon) {
      return addonRepository.save(addon);
    }

    @Override
    public Optional<Addon> updateAddon(String addonId, Addon updatedaddon) {
        Optional<Addon> exist = addonRepository.findById(addonId);
        if(exist.isPresent()){
            updatedaddon.setAddonId(addonId);
            return Optional.of(addonRepository.save(updatedaddon));
        }
        return Optional.empty();
    }

    @Override
    public void deleteAddon(String addonId) {
      addonRepository.deleteById(addonId);
    
}
}
