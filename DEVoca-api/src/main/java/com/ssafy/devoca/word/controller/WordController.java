package com.ssafy.devoca.word.controller;

import com.ssafy.devoca.word.model.WordDTO;
import com.ssafy.devoca.word.service.WordService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * 단어 사전 Controller
 *
 * @author kimjuyi
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/dictionary")
public class WordController {

    private final WordService wordService;

    /**
     * 단어 사전 진입 시 단어 목록 조회
     *
     * @return HttpStatus.OK, 단어 목록
     */
    @GetMapping("")
    public ResponseEntity<List<WordDTO>> getWordList() {
        log.info("getWordList 호출");
        try {
            List<WordDTO> wordList = wordService.getWordList();
            return ResponseEntity.status(HttpStatus.OK).body(wordList);
        } catch (Exception e) {
            log.error("wordList 조회 실패 : {}", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.emptyList());
        }
    }
    
}
