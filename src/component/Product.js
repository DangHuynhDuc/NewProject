import React,{Component} from 'react';

class Product extends Component{
  render() {
    return (
      
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="thumbnail">
              <img data-src="#" alt=""/>
              <div className="caption">
                  <h3>Title</h3>
                  <p>
                      ...
                  </p>
                  <p>
                      <a  className="btn btn-primary">Action</a>
                      <a  className="btn btn-default">Action</a>
                  </p>
              </div>
          </div>
      </div>
      
    );
  }
}

export default Product;
