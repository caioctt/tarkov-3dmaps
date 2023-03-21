/** @jsxImportSource @emotion/react */
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Tooltip,
} from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ManIcon from '@mui/icons-material/Man';
import Person4Icon from '@mui/icons-material/Person4';
import MapPlaceholderImage from '../../../public/MapPlaceholder.jpg';
import { SyntheticEvent } from 'react';

type CardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  imageHeigth?: string;
  playersInfo?: string;
  durationInfo?: string;
  enemiesInfo?: string;
  disabled?: boolean;
  link: string;
};

export default function CardMap({
  title,
  subtitle,
  image,
  imageHeigth,
  playersInfo,
  durationInfo,
  enemiesInfo,
  disabled,
  link,
}: CardProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = MapPlaceholderImage.src;
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea disabled={disabled} href={link}>
        <CardMedia
          component="img"
          height={imageHeigth ?? '140'}
          src={image}
          alt="map image"
          onError={(e) => handleImageError(e)}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          {durationInfo && (
            <Tooltip title="Duration" arrow>
              <Chip label={durationInfo} icon={<ScheduleIcon />} />
            </Tooltip>
          )}
          {playersInfo && (
            <Tooltip title="Players" arrow>
              <Chip label={playersInfo} icon={<ManIcon />} />
            </Tooltip>
          )}
          {enemiesInfo && (
            <Tooltip title="Enemies / Boss" arrow>
              <Chip label={enemiesInfo} icon={<Person4Icon />} />
            </Tooltip>
          )}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
