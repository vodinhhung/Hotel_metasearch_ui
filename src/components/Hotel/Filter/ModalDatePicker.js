import * as React from "react";
import { View } from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import { connect } from "react-redux";
import { setSearchParams } from "@redux/actions/hotelAction";
import DatePicker2 from "./DatePicker2";
const ModalDatePicker = ({
  dateFrom,
  dateTo,
  setSearchParams,
  visible,
  setVisible,
}) => {
  const setDate = (startDate, endDate) => {
    setSearchParams({ dateFrom: startDate });
    setSearchParams({ dateTo: endDate });
    setVisible(false);
  };
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white" };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ minHeight: 400 }}>
            <DatePicker2
              dateFrom={dateFrom}
              dateTo={dateTo}
              setDate={setDate}
            />
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};
function mapStateToProps(state) {
  return {
    dateTo: state.hotelSearchingByFilter.params.dateTo,
    dateFrom: state.hotelSearchingByFilter.params.dateFrom,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalDatePicker);
