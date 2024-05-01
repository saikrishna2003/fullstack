package com.java.bdayparty.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.FoodMenu;

@Service
public interface FoodMenuService {
        List<FoodMenu> getAllFoodMenus();
    Optional<FoodMenu> getMenuById(String menuId);
    FoodMenu createMenu(FoodMenu menu);
    Optional<FoodMenu> updateMenu(String menuId, FoodMenu menu);
    void deleteMenu(String menuId);
}
