import React from 'react'

const ClasificacionesMundial = () => {
  return (
    <>
      <div className="cgrid-row" id="scrollToOpta">
        <div className="col-300-offset-md col-300-offset-sm col-300-offset-xs">
          <div id="position">
            <opta-widget widget="standings" competition="342" season="112026" template="normal" live="true" default_nav="1" side="combined" data_detail="default" show_key="true" show_crests="true" points_in_first_column="true" lose_before_draw="true" show_form="6" competition_naming="full" team_naming="full" date_format="dddd D MMMM YYYY" sorting="true" show_live="true" show_relegation_average="true" show_logo="true" show_title="true" breakpoints="400" sport="football"></opta-widget>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClasificacionesMundial