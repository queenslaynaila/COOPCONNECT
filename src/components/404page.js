import React from 'react'
import "../styles/error.css"
export default function Errorpage() {
  return (
<div className='mt-5'>
<div class="page-404 mt-5">
    <div class="outer">
        <div class="middle">
            <div class="inner">

                <div class="inner-circle"><i class="fa fa-home"></i><span>404</span></div>
                <span class="inner-status">Oops! You're lost</span>
                <span class="inner-detail">
                    We can not find the page you're looking for.
                    <a href="#" class="btn btn-info mtl"><i class="fa fa-home"></i>&nbsp;
                        Return home
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>
</div>

  )
}

