import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export default function NewCreditCard(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title text-center">
                <FormattedMessage id="newCreditCard.thanks" />
              </h3>
              <p className="card-text text-muted  text-center">
                <FormattedMessage id="newCreditCard.youCanUse" />
              </p>
              <div className="d-flex justify-content-center mt-2 ">
                <Link className="btn btn-success" to={'/'}><FormattedMessage id="common.toHome" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
