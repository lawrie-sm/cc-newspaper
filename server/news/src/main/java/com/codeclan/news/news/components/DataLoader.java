package com.codeclan.news.news.components;

import com.codeclan.news.news.models.Article;
import com.codeclan.news.news.models.Author;
import com.codeclan.news.news.repositories.ArticleRepository;
import com.codeclan.news.news.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ArticleRepository articleRepo;

    @Autowired
    AuthorRepository authorRepo;

    public void run(ApplicationArguments args) {
        Author reg = new Author("reporter", "reg");
        Article article1 = new Article("Big news",
                "Big news summary",
                "Big news text",
                reg,
                new GregorianCalendar(2019, Calendar.JANUARY, 10) {
                });
        Article article2 = new Article("Small news",
                "Small news summary",
                "Small news text",
                reg,
                new GregorianCalendar(2019, Calendar.FEBRUARY, 10));
        Article article3 = new Article("Other news",
                "summary",
                "text",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10));
        authorRepo.save(reg);
        articleRepo.save(article1);
        articleRepo.save(article2);
        articleRepo.save(article3);
    }

}
