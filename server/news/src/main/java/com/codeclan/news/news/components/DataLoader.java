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
        Author katie = new Author("editor", "katie");
        authorRepo.save(reg);
        authorRepo.save(katie);
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
                katie,
                new GregorianCalendar(2019, Calendar.JANUARY, 10),ArticleCategory.CULTURE );

        Article article2 = new Article("Claim over Boris Johnson's behaviour 'deeply concerning",
                "Claims that Boris Johnson squeezed a journalist's thigh under a table during a lunch are \"deeply concerning\", a former Tory cabinet minister has said.",
                "Writing in the Sunday Times, Charlotte Edwardes said the incident took place in 1999, but Downing Street called the allegation \"untrue\".\n" +
                        "\n" +
                        "Justine Greening, now an independent MP, said it raised \"a question about character and integrity\".\n" +
                        "\n" +
                        "But Chancellor Sajid Javid said he had \"full faith\" in the PM.\n" +
                        "\n" +
                        "Following No 10's denial on Sunday evening, Ms Edwardes tweeted: \"If the prime minister doesn't recollect the incident then clearly I have a better memory than he does.\"\n" +
                        "\n" +
                        "No 10 denies Johnson 'thigh squeeze' claim\n" +
                        "In her first column for the Sunday Times - published on the eve of the Conservative conference in Manchester - Ms Edwardes said she was seated on Mr Johnson's right at the lunch, held at the Spectator magazine's offices.\n" +
                        "\n" +
                        "Mr Johnson was editor of the magazine at the time.\n",
                katie,
                new GregorianCalendar(2019, Calendar.FEBRUARY, 10 ), ArticleCategory.UK);

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
                katie,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.SPORT);

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
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.WORLD);

        Article article5 = new Article("Leicester 5-0 Newcastle: No need for Newcastle to panic yet - Micah Richards analysis",
                "Things look pretty grim for Newcastle after Sunday's heavy defeat by Leicester but I don't think they need to press the panic button yet.",
                "Yes, the second half at the King Power Stadium turned into a total nightmare for the Magpies but you have to remember they were down to 10 men and were playing an in-form Foxes side, who went after them relentlessly.\n" +
                        "\n" +
                        "I actually thought the Magpies were decent defensively and held a good line until Isaac Hayden was sent off, and it was only after the break when their heads dropped and things got messy.\n" +
                        "\n" +
                        "Leicester scored some of their goals far too easily but I don't think that was down to a lack of effort, despite what Newcastle captain Jamaal Lascelles said about that after the game.\n" +
                        "\n" +
                        "Newcastle's complete surrender' angers Bruce\n" +
                        "They were actually trying to get out to the ball but Leicester had too much quality in possession. Before Newcastle knew it, they were kind of burnt out, and that is when the game really got away from them.",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.SPORT);

        Article article6 = new Article("Jess Phillips abuse: Police called to MP's home three times",
                "MP Jess Phillips said the police were called to her house three times over the weekend amid a \"massive recent increase\" in personal abuse.",
                "nThe Labour MP told BBC Breakfast she had received hundreds of violent messages since a heated Commons debate on Parliamentary language.\n" +
                        "\n" +
                        "She claimed Boris Johnson had a \"direct strategy designed to divide\", which she said was \"working\".\n" +
                        "\n" +
                        "The prime minister denies this and said any threats to MPs were \"deplorable\".\n" +
                        "\n" +
                        "On Friday, a man was charged in connection with a disturbance at Ms Phillips' Birmingham Yardley constituency office the day before.\n" +
                        "\n" +
                        "Ms Phillips has been a high-profile critic of Commons language in recent days.\n" +
                        "\n" +
                        "On Thursday, she used the chamber to ask an urgent question on the topic, urging the prime minister to apologise over terms she said risked inflaming \"hatred and division\".\n" +
                        "\n" +
                        "How many threats do MPs receive?\n" +
                        "Do MPs need to mind their language?\n" +
                        "More news from around the West Midlands\n" +
                        "\"Since last Wednesday of last week I've had hundreds of violent messages and abusive emails,\" she told the programme earlier. These included abuse on social media as well as direct threats.\n" +
                        "\n" +
                        "Ms Phillips said she \"would not claim\" she was always \"well-tempered\" in Parliament.\n" +
                        "\n" +
                        "\"I just wish that we could all temper our language and start talking to each other reasonably about a very difficult issue [Brexit],\" she said.\n",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.UK);

        Article article7 = new Article("Volkswagen: Germany's first mass lawsuit begins",
                "Germany's first mass lawsuit begins as 450,000 owners of diesel Volkswagen cars take on the company.",
                "They argue they are owed compensation for being sold cars based on misleading emissions data.\n" +
                        "\n" +
                        "The scandal has already cost VW €30bn (£26.6bn).\n" +
                        "\n" +
                        "It has faced class action claims in the US and Australia, but this is the first time Germans could pursue group claims since the law was changed last year.\n" +
                        "\n" +
                        "This trial will settle points of law and the claimants will later be able to file follow-up claims for compensation if they are successful.\n" +
                        "\n" +
                        "The trial, at Braunschweig Higher Regional Court, about 20 miles from VW's Wolfsburg head office, is likely to last years, however.\n" +
                        "\n" +
                        "Part of VW's settlements so far include a deal to buy back 500,000 cars in the US, where it has agreed to pay more than $25bn (£20bn).\n" +
                        "\n" +
                        "In Australia the company will pay 127 million Australian dollars (£70m) to compensate owners, paying them A$1,400 apiece.\n" +
                        "\n" +
                        "Last week it emerged that three current and former Volkswagen executives were charged with market manipulation in connection with the diesel emissions scandal.\n" +
                        "\n" +
                        "Chief executive Herbert Diess, chairman Hans Dieter Pötsch and ex-boss Martin Winterkorn, did not inform investors early enough about the financial fallout, German prosecutors allege.\n" +
                        "\n" +
                        "In 2015, the firm admitted using illegal software to cheat on emissions tests. VW said it was confident those allegations would prove groundless.\n" +
                        "\n" +
                        "This may be a landmark lawsuit - and in terms of the sheer number of claimants, it's certainly attention grabbing. But it may not be the biggest concern for Volkswagen right now.\n" +
                        "\n" +
                        "Unless there is a settlement, the legal process is likely to take take years - VW expects it to take at least four. Even if they win, car owners will have to go back to court to get compensation.\n" +
                        "\n" +
                        "Meanwhile, VW's chairman and chief executive are both fighting criminal charges for alleged market manipulation linked to the diesel scandal.\n" +
                        "\n" +
                        "Volkswagen itself is facing the possibility of hefty fines from the EU, after being accused of colluding with other manufacturers to delay the introduction of emissions control technology.\n" +
                        "\n" +
                        "It's safe to say its lawyers are already keeping pretty busy at the moment. And in the meantime, the company is trying to turn itself into a leader in the market for electric cars.\n" +
                        "\n" +
                        "Against that background, the group lawsuit may seem for the moment like just another irritation.",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.WORLD);

        Article article8 = new Article("Swiss auction off supercars of Equatorial Guinea leader’s son",
                "A collection of supercars confiscated from the son of Equatorial Guinea's president have been auctioned off in Switzerland.",
                " The cars were seized by Swiss authorities as part of an investigation into Teodorin Nguema Obiang.\n" +
                        "\n" +
                        "He is vice-president to his father, Teodoro Obiang Nguema, who has ruled Equatorial Guinea for 40 years.\n" +
                        "\n" +
                        "Twenty-five of Mr Obiang's cars went under the hammer at a golf club near Geneva on Sunday.\n" +
                        "\n" +
                        "The cars, among them Lamborghinis, Ferraris, Bentleys and Rolls Royces, fetched about $27m (£21.9m; 26m Swiss francs) in total.\n" +
                        "\n" +
                        "Under a deal will prosecutors, some $23m will go to social projects in Equatorial Guinea, a former Spanish colony where poverty is rife.\n" +
                        "\n" +
                        "'$16m seized' from Equatorial Guinea leader's son\n" +
                        "Find out more about Equatorial Guinea\n" +
                        "Who is President Teodoro Obiang Nguema?\n" +
                        "One of the most \"rare and remarkable\" cars, a 2014 Lamborghini Veneno Roadster, was sold for $8.3m to an anonymous buyer.\n" +
                        "\n" +
                        "It is a new world record price for a Lamborghini sold at auction, British auctioneers Bonhams said.\n" +
                        "\n" +
                        "The hammer price for the 354km/h (220mph) car, introduced to celebrate Lamborghini's 50th anniversary, was about 50% more than its pre-sale estimate.\n" +
                        "\n" +
                        "An Aston Martin One-77 Coupe, described as an \"absolute rocket ship\" by the auction house, went for $1.5m.\n" +
                        "\n" +
                        "\"Cars like this would be the jewel of any collection, but to have them all together is really quite extraordinary,\" Lynnie Farrant, press officer for auctioneer Bonhams, told the BBC.\n" +
                        "\n",
                reg,
                new GregorianCalendar(2019, Calendar.MARCH, 10), ArticleCategory.WORLD);



        articleRepo.save(article1);
        articleRepo.save(article2);
        articleRepo.save(article3);
        articleRepo.save(article4);
        articleRepo.save(article5);
        articleRepo.save(article6);
        articleRepo.save(article7);
        articleRepo.save(article8);
    }

}
