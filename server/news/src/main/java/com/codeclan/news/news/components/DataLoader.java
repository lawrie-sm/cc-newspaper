package com.codeclan.news.news.components;

import com.codeclan.news.news.models.Article;
import com.codeclan.news.news.models.Author;
import com.codeclan.news.news.properties.ArticleCategory;
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
        Article article1 = new Article("Be More Chill: The word-of-mouth hit musical now heading to London\n",
                "A new musical which became a word-of-mouth hit in the US is set to open in London after a successful Broadway run",
                "Be More Chill, which has been praised for attracting a new teen audience to the theatre, will open at The Other Palace in February, the BBC can reveal.\n" +
                        "\n" +
                        "The pop-rock, sci-fi musical tells the story of an anxious teenager who takes a pill in order to become more popular.\n" +
                        "\n" +
                        "The soundtrack has played a large part in making the show a sleeper hit - racking up 300 million streams.\n" +
                        "\n" +
                        "\"Ever since its sellout off-Broadway run, the show has become a hit with the best kind of social-media word of mouth powering its progress to Broadway,\" wrote Tim Teeman in The Daily Beast.\n" +
                        "\n" +
                        "\"It has brought, so observers have noted, a younger audience to the theatre. It has caused great excitement and created extreme fandom.\"\n" +
                        "\n" +
                        "Be More Chill originally premiered in 2015 at the Two River Theatre in Red Bank, New Jersey. It had a limited run there and little was made of the cast soundtrack which was quietly released on streaming services.\n" +
                        "\n" +
                        "In 2017, the number of online listeners to the recording started growing, and the show began to attract a cult following, particularly among young people - most of whom hadn't seen the show, but still created Tumblr pages, YouTube videos, blogs and art fiction in tribute to it.\n" +
                        "\n" +
                        "As a result, the show was revived by its creators the following year, first as an off-Broadway production before it transferred to the Lyceum Theatre for a run on Broadway.\n" +
                        "\n" +
                        "\"I'm a little older and so I'm used to word-of-mouth being telling my friends about an amazing show or movie,\" Be More Chill's producer Jerry Goehring tells BBC News. \"And in the old days we had radio that would play a song and it would be popular. Word of mouth would happen in different ways.\n",
                reg,
                new GregorianCalendar(2019, Calendar.JANUARY, 10),ArticleCategory.CULTURE );

        Article article2 = new Article("Small news",
                "Small news summary",
                "Small news text",
                reg,
                new GregorianCalendar(2019, Calendar.FEBRUARY, 10 ), ArticleCategory.SPORT);

        Article article3 = new Article("Russian GP: Can Ferrari control Charles Leclerc and Sebastian Vettel fall-out?\n",
                "Ferrari's damage-limitation mode went into overdrive after the Russian Grand Prix, but it remains to be seen whether they will be able to control the fall-out from the latest team orders controversy between their two drivers.",
                "The facts are simple.\n" +
                        "\n" +
                        "Sebastian Vettel, several times in the early laps of the race, ignored a direct order to let Charles Leclerc past him into the lead.\n" +
                        "\n" +
                        "Vettel was in front as a result of Leclerc executing his part of a strategy agreed before the race and aimed at ensuring the German could pass Lewis Hamilton's Mercedes, which qualified between them in second place, so the Ferraris could run one-two after the start.\n" +
                        "\n" +
                        "It seems, though, that Vettel did not fulfil his part of the bargain, and - although they denied it afterwards - it looked as if the team had to take things into their own hands to resolve it.\n" +
                        "\n" +
                        "There is so much at stake here - a proud champion fighting for his position in the team, which is patently under threat from an extravagantly talented youngster, and a team boss struggling to contain the potentially volcanic mix when two alphas are in the same cage.\n" +
                        "\n" +
                        "In the end, the way the race turned out, Ferrari were able to keep a lid on the situation - publicly at least. But as the dust settled afterwards, from what was not said as much as what was, it was hard to believe that the matter would rest there.",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.UK);

        Article article4 = new Article("Saudi crown prince warns of 'Iran threat' to global oil",
                "Saudi Arabia's crown prince has warned that oil prices could rise steeply if the world does not act to deter Iran.",
                "Saudi Arabia's crown prince has warned that oil prices could rise steeply if the world does not act to deter Iran.\n" +
                        "\n" +
                        "Mohammed bin Salman said failure to act could embolden Iran and lead to war, which he said would ruin the global economy, following an attack on oil facilities which he blames on Tehran.\n" +
                        "\n" +
                        "Iran said the prince's remarks would \"bring [the Saudis] nothing but shame\".\n" +
                        "\n" +
                        "The prince also said he accepted some responsibility for journalist Jamal Khashoggi's killing.\n" +
                        "\n" +
                        "But, speaking to CBS News, he denied personally ordering it.\n" +
                        "\n" +
                        "The prince, who is considered the de facto ruler of Saudi Arabia, is suspected of personally targeting Mr Khashoggi, a Saudi journalist critical of the government in Riyadh.\n" +
                        "\n" +
                        "Mr Khashoggi was killed in Saudi Arabia's consulate in Turkey on 2 October 2018.\n",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.UK);

        authorRepo.save(reg);
        articleRepo.save(article1);
        articleRepo.save(article2);
        articleRepo.save(article3);
        articleRepo.save(article4);
    }

}
