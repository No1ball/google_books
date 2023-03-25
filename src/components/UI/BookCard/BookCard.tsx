import { Card, CardActionArea, CardContent, Typography} from '@mui/material';
import React from 'react';
import classes from './BookCard.module.scss'
interface DataForCard{
    title: string,
    imagePath?: string,
    categories?:string[],
    authors?: string[]
}

const BookCard = (props:DataForCard) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div className={classes.image}>
                    <img src={props.imagePath} alt={'book'}/>
                </div>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.categories?.length ?
                            <span>
                                <span className={classes.textCl}>
                                    Categories
                                </span>: {props.categories.map((item, i)=>
                                <span key={i}>{item} </span>
                            )}</span>
                        :
                            false
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.authors?.length ?
                            <span>
                                <span className={classes.textCl}>
                                    Authors
                                </span>:
                                {props.authors.map((item, i)=>
                                    <span key={i}>
                                        { props.authors && i !== props.authors.length - 1 ?
                                            <span> {item},</span>
                                            :
                                            <span> {item}</span> }
                                    </span>
                                )}</span>
                            :
                            false
                        }

                    </Typography>
                </CardContent>
            </CardActionArea>


        </Card>
    );
};

export default BookCard;