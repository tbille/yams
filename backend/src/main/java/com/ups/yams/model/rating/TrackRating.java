package com.ups.yams.model.rating;

import com.ups.yams.model.music.Track;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotNull;

public class TrackRating extends Rating {
    @DBRef
    @NotNull
    private Track track;

    public Track getTrack() {
        return track;
    }

    public void setTrack(Track track) {
        this.track = track;
    }
}
