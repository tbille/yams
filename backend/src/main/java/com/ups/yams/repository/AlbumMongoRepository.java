package com.ups.yams.repository;

import com.ups.yams.model.Album;
import com.ups.yams.model.UserDataObject;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface AlbumMongoRepository extends MongoRepository<Album, String> {
}
