import MeetupList from '../components/meetups/MeetupList';


const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Squirrels Meetup',
        image:
          'https://static.vecteezy.com/system/resources/previews/004/338/987/non_2x/a-close-up-of-a-red-squirrel-standing-on-its-back-legs-against-an-old-tree-trunk-free-photo.jpg',
        address: 'Meetupstree 5, 101 Meetup Forest',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'SpaceZ Meetup',
        image:
          'https://static.vecteezy.com/system/resources/previews/010/243/360/non_2x/the-big-moon-shines-behind-the-sea-with-stars-and-colorful-clouds-free-photo.jpg',
        address: 'MeetupHeadquarter 6, 0069 Area 51',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
]

function AllMeetupsPage() {
    return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA}/>
    </section>
    );
}

export default AllMeetupsPage;