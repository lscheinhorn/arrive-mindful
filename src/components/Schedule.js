import React from 'react'
import Banner from './Banner'

function Schedule(props) {
  return (
    <>
      {props.banner ? (
        <Banner
          background={
            'https://images.unsplash.com/photo-1533741761835-c67cadbffd3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2747&q=80'
          }
          header={'Class Schedule'}
          detail={'Monthly Offerings'}
          textColor={'white'}
        />
      ) : null}

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate text-center">
              <h2 className="mb-1">
                {props.range === 'week'
                  ? "This Week's"
                  : `${new Date().toLocaleString('default', {
                      month: 'long',
                    })}'s`}{' '}
                Schedule
              </h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-12 ftco-animate">
              {props.range === 'week' ? (
                <iframe
                  title="Weekly Schedule"
                  src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23C0CA33&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;mode=WEEK&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;title=Weekly%20Schedule"
                  style={{ borderWdth: 0, position: 'relative' }}
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              ) : (
                <iframe
                  title="Monthly Schedule"
                  src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23C0CA33&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;mode=MONTH&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;title=Weekly%20Schedule"
                  style={{ borderWdth: 0, position: 'relative' }}
                  width="100%"
                  height="600"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Schedule
