import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function WorkCards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="data:image/jpeg;base64,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"
        />
        <Card.Body>
          <Card.Title>The Boundless & Ballin' Podcast</Card.Title>
          <Card.Text>
            Established in August 2020, I began this podcast to give my opinions
            on current NBA issues.
          </Card.Text>
          <Button href="https://open.spotify.com/show/2AMgpJa4mznnPs46TjbJez?si=bjBRKp6eTBi5u5dJI5UC6A&nd=1">
            Learn More
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://miro.medium.com/max/3404/1*jfdwtvU6V6g99q3G7gq7dQ.png"
        />
        <Card.Body>
          <Card.Title>Boundless & Ballin'</Card.Title>
          <Card.Text>
            I also created a blog filled with sports and personal stories called{' '}
            <i>Boundless & Ballin'</i> (formerly called{' '}
            <i>The Voice of Truth</i>) on Medium.
          </Card.Text>
          <Button href="https://medium.com/boundless-ballin">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
        />
        <Card.Body>
          <Card.Title>YouTube</Card.Title>
          <Card.Text>
            I've been a community journalist since 2015, going out into Southern
            California to notable stories, interviewing people, and publishing
            those reports to my YouTube channel, "Jordan...Boundless!".
          </Card.Text>
          <Button href="https://www.youtube.com/channel/UCO_Qcs7hE-BjM0E6fed6f0Q">
            Learn More
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/1d81117f-a264-46ee-804c-8f37706ee215_3000x3000.png"
        />
        <Card.Body>
          <Card.Title>The Voice of Truth</Card.Title>
          <Card.Text>
            In January 2022, I decided to start writing on Substack as a way of
            sharing more personal stories and giving readers a real look into
            the life of a student journalist.
          </Card.Text>
          <Button href="https://jordanpagkalinawan.substack.com">
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
