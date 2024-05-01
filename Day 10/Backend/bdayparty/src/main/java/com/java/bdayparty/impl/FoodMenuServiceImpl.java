package com.java.bdayparty.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.FoodMenu;
import com.java.bdayparty.repository.FoodMenuRepository;

import lombok.RequiredArgsConstructor;
import com.java.bdayparty.service.FoodMenuService;

@Service
@RequiredArgsConstructor
public class FoodMenuServiceImpl implements FoodMenuService{
    private final FoodMenuRepository foodMenuRepository;

    @Override
    public List<FoodMenu> getAllFoodMenus() {
        return foodMenuRepository.findAll();
    }

    @Override
    public Optional<FoodMenu> getMenuById(String menuId) {
        return foodMenuRepository.findById(menuId);
    }

    @Override
    public FoodMenu createMenu(FoodMenu menu) {
       return foodMenuRepository.save(menu);
    }

    @Override
    public Optional<FoodMenu> updateMenu(String menuId, FoodMenu updatedmenu) {
         Optional<FoodMenu> exist = foodMenuRepository.findById(menuId);
        if(exist.isPresent()){
            updatedmenu.setFoodMenuId(menuId);
            return Optional.of(foodMenuRepository.save(updatedmenu));
        }
        return Optional.empty();
    }

    @Override
    public void deleteMenu(String menuId) {
       foodMenuRepository.deleteById(menuId);
    }

    
}
