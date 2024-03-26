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

import com.java.bdayparty.model.FoodMenu;
import com.java.bdayparty.service.FoodMenuService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("bdayparty/api/v1/foodmenu")
public class FoodMenuController {
    private final FoodMenuService foodMenuService;

    @GetMapping
    public ResponseEntity<List<FoodMenu>> getAllFoodMenus(){
        List<FoodMenu> menus = foodMenuService.getAllFoodMenus();
        return ResponseEntity.ok(menus);
    }

    @GetMapping("/{menuId}")
    public ResponseEntity<FoodMenu> getMenuById(@PathVariable String menuId){

        Optional<FoodMenu> menu = foodMenuService.getMenuById(menuId);
        return menu.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping()
    public ResponseEntity<FoodMenu> createMenu(@RequestBody FoodMenu menu){
        FoodMenu createMenu = foodMenuService.createMenu(menu);
        return ResponseEntity.status(HttpStatus.CREATED).body(createMenu);
    }

    @DeleteMapping("/{menuId}")
    public ResponseEntity<String> delete(@PathVariable String menuId){
        foodMenuService.deleteMenu(menuId);
        return ResponseEntity.ok("Menu Item deleted successfully");
    }

    @PutMapping("/{menuId}")
    public ResponseEntity<FoodMenu> updateMenu(@PathVariable String menuId, @RequestBody FoodMenu menu){
        var updatedMenu = foodMenuService.updateMenu(menuId, menu);
        return updatedMenu.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
}
