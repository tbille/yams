package com.ups.yams.repository;

import com.ups.yams.model.music.Artist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArtistMongoRepository extends MongoRepository<Artist, String> {
}
