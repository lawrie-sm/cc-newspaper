package com.codeclan.news.news.controller;

import com.codeclan.news.news.models.Article;
import com.codeclan.news.news.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/articles")
public class ArticleController {

   @Autowired
   ArticleRepository articleRepo;

   @GetMapping(value = "/by-date")
    public List<Article> articlesOrderedByDate() {
       return articleRepo.findAllByOrderByDateDesc();
   }

}
