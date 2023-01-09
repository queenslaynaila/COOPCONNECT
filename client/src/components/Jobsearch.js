import React from 'react'

export default function Jobsearch() {
  return (
<div class="container">
  <div class="row mt-5 mb-5">
        <aside class="col-md-3">
            <div class="card">

                <article class="filter-group">
                    <header class="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                            <i class="icon-control fa fa-chevron-down"></i>
                            <h6 class="title">Category </h6>
                        </a>
                    </header>
                    <div class="filter-content collapse show" id="collapse_2"  >
                        <div class="card-body">
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" checked="" class="custom-control-input"></input>
                            <div class="custom-control-label">Marketing
                                  </div>
                            </label>
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" checked="" class="custom-control-input"></input>
                            <div class="custom-control-label">Design
                                  </div>
                            </label>
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" checked="" class="custom-control-input"></input>
                            <div class="custom-control-label"> Customer SErvice
                                <b class="badge badge-pill badge-light float-right">35</b> </div>
                            </label>
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" checked="" class="custom-control-input"></input>
                            <div class="custom-control-label">Carejobs
                                <b class="badge badge-pill badge-light float-right">89</b> </div>
                            </label>
                            <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input"></input>

                            </label>
                </div>
                    </div>
                </article>
                <article class="filter-group">
                    <header class="card-header">
                        <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                            <i class="icon-control fa fa-chevron-down"></i>
                            <h6 class="title">Salary range </h6>
                        </a>
                    </header>
                    <div class="filter-content collapse show" id="collapse_3"  >
                        <div class="card-body">
                            <input type="range" class="custom-range" min="0" max="100" name=""></input>
                            <div class="form-row">
                            <div class="form-group col-md-6">
                            <label>Min</label>
                            <input class="form-control" placeholder="$0" type="number"></input>
                            </div>
                            <div class="form-group text-right col-md-6">
                            <label>Max</label>
                            <input class="form-control" placeholder="$1,0000" type="number"></input>
                            </div>
                            </div>
                            <button class="btn btn-block btn-primary">Apply</button>
                        </div>
                    </div>
                </article>


            </div>
        </aside>
        <main class="col-md-9">
            <header class="border-bottom mb-4 pb-3">
                    <div class="form-inline">
                        <span class="mr-md-auto">32 Items found </span>
                        <select class="mr-2 form-control">
                            <option>Latest items</option>
                            <option>Trending</option>
                            <option>Most Popular</option>
                            <option>Cheapest</option>
                        </select>
                        <div class="btn-group">
                            <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view">
                                <i class="fa fa-bars"></i></a>
                            <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view">
                                <i class="fa fa-th"></i></a>
                        </div>
                    </div>
            </header>

            <div class="row">
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <span class="badge badge-danger"> NEW </span>
                                            <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#">
                            <i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Great item name goes here</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                    <del class="price-old">$1980</del>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                                        <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                                            <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                                        <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                                        <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                                        <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                                        <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>

                <div class="col-md-4">
                    <figure class="card card-product-grid">
                        <div class="img-wrap">
                            <img src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg" class="img-fluid"></img>
                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                        </div>
                        <figcaption class="info-wrap">
                            <div class="fix-height">
                                <a href="#" class="title">Product name goes here just for demo item</a>
                                <div class="price-wrap mt-2">
                                    <span class="price">$1280</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <nav class="mt-4" aria-label="Page navigation sample">
                <ul class="pagination">
                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </main>
	</div>
</div>
  )
}

