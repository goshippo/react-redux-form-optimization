import { useEffect, useState } from "react";
import { connect } from "react-redux"
import ChildComponent from './ChildComponent';

const BetterParentComponent = (props) => {

    const { testVariants, testVariantByFeature } = props;
    const [ finalTestVariants, setFinalTestVariants] = useState([]);

    useEffect(()=>{

        setFinalTestVariants(()=>{
            return testVariants.map(
                (t) => testVariantByFeature[t]
            )
        })

    }, [testVariants, testVariantByFeature]);

    return (
        <div style={{ width : 400, backgroundColor : '#e8ffe9', margin : '0 auto', padding : 30 }}>
            Better Parent Component <br/><br/>
            <ChildComponent id="2" testVariants={finalTestVariants} >
                {props.children}
            </ChildComponent>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        testVariants : state.featureReducer.testVariants,
        testVariantByFeature : state.featureReducer.testVariantByFeature   
    }
}

export default connect(mapStateToProps)(BetterParentComponent)