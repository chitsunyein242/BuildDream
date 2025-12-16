import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './Faq.css'

const Faq = () => {
  return (
    <div>
      <div className="faq">
        <div className="container mx-auto p-6 md:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white">
              <h4 className="primary-color font-bold text-lg mb-2">Drop A Message</h4>
              <h2 className="text-3xl font-bold mb-6">Request A Quote</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 my-4">
                <div className="form-control w-full max-w-xs">
                  <label htmlFor="" className="label">
                    <span className="label-text font-medium uppercase">
                      Your Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    className="input outline-none border border-gray-300 w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label htmlFor="" className="label">
                    <span className="label-text font-medium uppercase">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input outline-none border border-gray-300 w-full max-w-xs focus:outline-none"
                  />
                </div>
              </div>
              <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text font-medium uppercase">
                  Select Subject
                </span>
              </label>
              <select className="select w-full rounded-none focus:outline-none border border-gray-300">
                <option disabled>Pick one</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className="form-control">
              <label  className="label">
                <span className="label-text font-medium uppercase">Message</span>
              </label>
              <textarea className="textarea focus:outline-none w-full rounded-none border border-gray-300 h-64" placeholder="Message"></textarea>
            </div>
            <button className="btn bg-primary-color border-none mt-4 rounded-none text-gray-900 hover:bg-amber-700 ">Send Message</button>
            </div>       
            <div>
              <h4 className="primary-color font-bold text-lg">
                Frequently Ask Question
              </h4>
              <h1 className="text-3xl md:text-6xl my-4">
                You Want To Ask Something From Us?
              </h1>
              <p className="text-gray-400 text-left mb-6">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
               <Accordion>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  What harsh truths do you prefer to ignore?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  Exercitation in fugiat est ut ad ea cupidatat ut in
                                  cupidatat occaecat ut occaecat consequat est minim minim
                                  esse tempor laborum consequat esse adipisicing eu
                                  reprehenderit enim.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  Is free will real or just an illusion?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  In ad velit in ex nostrud dolore cupidatat consectetur
                                  ea in ut nostrud velit in irure cillum tempor laboris
                                  sed adipisicing eu esse duis nulla non.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  What harsh truths do you prefer to ignore?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  Exercitation in fugiat est ut ad ea cupidatat ut in
                                  cupidatat occaecat ut occaecat consequat est minim minim
                                  esse tempor laborum consequat esse adipisicing eu
                                  reprehenderit enim.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                      <AccordionItem>
                          <AccordionItemHeading>
                              <AccordionItemButton>
                                  Is free will real or just an illusion?
                              </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                              <p>
                                  In ad velit in ex nostrud dolore cupidatat consectetur
                                  ea in ut nostrud velit in irure cillum tempor laboris
                                  sed adipisicing eu esse duis nulla non.
                              </p>
                          </AccordionItemPanel>
                      </AccordionItem>
                  </Accordion>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Faq
