import React, { useEffect, useState } from 'react';
import CardMap from '@/components/CardMap';
import { Container, Grid } from '@mui/material';
import { ITarkovMapModel, ITarkovMapsModel } from '@/models/tarkov-maps.model';
import { loadMaps } from '@/services/maps';

export default function Maps() {
  const [maps, setMaps] = useState<ITarkovMapModel[]>();

  const loadMapsInfo = React.useCallback(() => {
    return loadMaps.tarkov().then((response: ITarkovMapsModel) => {
      setMaps(response.maps);
    });
  }, []);

  useEffect(() => {
    loadMapsInfo();
  }, [loadMapsInfo]);

  return (
    <Container>
      <Grid flex={1} container spacing={3} paddingTop={4}>
        {!!maps &&
          maps.map((currentMap) => (
            <Grid item key={currentMap.id} lg={3} md={4} sm={6} xs={12}>
              <CardMap
                link={`/${currentMap.name}`}
                title={currentMap.name}
                durationInfo={`${currentMap.raidDuration} minutes`}
                playersInfo={currentMap.players}
                image={`/${currentMap.normalizedName}.jpg`}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
