package com.java.bdayparty.dto.Response;

import java.util.List;
import java.util.Collections;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BasicsResponse<T> {
    private String message;
    @Builder.Default
    private List<T> dataList = Collections.emptyList();
    private T data;
    
}
