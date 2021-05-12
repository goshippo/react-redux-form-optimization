import { connect } from "react-redux"
import ChildComponent from './ChildComponent';

const ParentComponent = (props) => {

    return (
        <div style={{ width : 400, backgroundColor : '#fff6f6', margin : '0 auto', padding : 30 }}>
            Bad Parent Component <br/><br/>
            <ChildComponent id="1" testVariants={props.testVariants} >
                {props.children}
            </ChildComponent>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        testVariants : state.featureReducer.testVariants.map(
            (t) => state.featureReducer.testVariantByFeature[t]
        )
    }
}

export default connect(mapStateToProps)(ParentComponent)