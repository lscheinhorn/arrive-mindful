/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

function Classes() {
  // NOTE: You cannot hover over a hidden element. One solution is to nest the element inside another container:
  const setHover = (event) => {
    let setTarget = event.target.querySelector('h3') || event.target;
    setTarget.style.visibility = 'visible';
  };
  const removeHover = (event) => {
    let removeTarget = event.target.querySelector('h3') || event.target;
    removeTarget.style.visibility = 'hidden';
  };
  const [classList, setClassList] = useState([
    {
      title: 'Introductory Yoga',
      description:
        'Yoga is for everyone. We love to empower people of all abilities to explore the spirit-mind-body connection through practice that makes the most sense for them. Book a beginners class or private session with us to start your journey towards a more mindful and fulfilling life!',
      backgroundImage: 'classes-3.jpg',
    },
    {
      title: 'Moderate Yoga',
      description:
        'This class will help those with some yoga experience deepen their practice in a supportive environment. We will guide you to explore new postures, breath techniques, and more prolonged meditation to encourage growth and expansion.',
      backgroundImage: 'classes-6.jpg',
    },
    {
      title: 'Vigorous Flow',
      description:
        'This class is best for yogis who have been practicing for some time and want to challenge themselves to build strength, power, and endurance. All of our classes emphasize consistent attention to mindfulness, breath awareness, and integration throughout as yoga is the practice of uniting body, breath, mind, and spirit.',
      backgroundImage: 'classes-7.jpg',
    },
    {
      title: 'Meditation',
      description:
        'All yoga classes place a strong emphasis on mindfulness with meditations at both the open and close of each class. However, for those who would like to deepen their meditation practice, inquire about our guided meditation sessions. We will meet you wherever you are in your practice. We want to make meditation accessible to all and a joy to explore.',
      backgroundImage: 'classes-4.jpg',
    },
  ]);
  return (
    <>
      <Banner
        background={
          'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80'
        }
        header={'Classes'}
        detail={'Remote and In Person • Private and Group Lessons'}
        textColor={'white'}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {classList.map((classItem) => (
              <div className="col-md-6" key={classItem.title}>
                <div className="classes w-100 ftco-animate">
                  <Link
                    to="/contact"
                    className="img w-100 mb-3"
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(images/${classItem.backgroundImage})`,
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      onMouseEnter={(e) => setHover(e)}
                      onMouseLeave={(e) => removeHover(e)}
                    >
                      <h3
                        id="hover-item"
                        className="text w-100 text-center"
                        style={{
                          height: '100%',
                          width: '100%',
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          textAlign: 'center',
                          padding: '30%',
                          color: '#ffb5b5',
                          visibility: 'hidden',
                        }}
                      >
                        Schedule a class
                      </h3>
                    </div>
                  </Link>
                  <div className="text w-100 text-center">
                    <h3>
                      <Link to="/contact">{classItem.title}</Link>
                    </h3>
                    <p>{classItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes;
