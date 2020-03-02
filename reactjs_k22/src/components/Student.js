import React from 'react'

class Student extends React.Component{
    render() {
        return (
            <div id="student" className="section">
            <div className="container text-center">
                <h2 className="text-dark">student</h2>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className="img-fluid mb-4" src="images/slide-1.jpg" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className="img-fluid mb-4" src="images/slide-2.jpg" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className="img-fluid mb-4" src="images/slide-3.jpg" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img className="img-fluid mb-4" src="images/slide-4.jpg" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Student