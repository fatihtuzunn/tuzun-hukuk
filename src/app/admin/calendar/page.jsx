"use client"

import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
    Scheduler,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    MonthView,
    CurrentTimeIndicator,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
    Toolbar,
    DateNavigator,
    TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";

export default function Demo() {
    const [data, setData] = React.useState([]);
    const [addedAppointment, setAddedAppointment] = React.useState({});
    const [appointmentChanges, setAppointmentChanges] = React.useState({});
    const [editingAppointment, setEditingAppointment] = React.useState();

    function commitChanges({ added, changed, deleted }) {
        let newdata = data;
        if (added) {
            const startingAddedId =
                newdata.length > 0 ? newdata[newdata.length - 1].id + 1 : 0;
            newdata = [...newdata, { id: startingAddedId, ...added }];
        }
        if (changed) {
            newdata = newdata.map((appointment) =>
                changed[appointment.id]
                    ? { ...appointment, ...changed[appointment.id] }
                    : appointment
            );
        }
        if (deleted !== undefined) {
            newdata = newdata.filter((appointment) => appointment.id !== deleted);
        }
        setData(newdata);
        console.log(data);
    }

    return (
        <Paper>
            <Scheduler data={data} height={660} locale="tr-TR">
                <ViewState />
                <EditingState
                    onCommitChanges={commitChanges}
                    addedAppointment={addedAppointment}
                    onAddedAppointmentChange={setAddedAppointment}
                    appointmentChanges={appointmentChanges}
                    onAppointmentChangesChange={setAppointmentChanges}
                    editingAppointment={editingAppointment}
                    onEditingAppointmentChange={setEditingAppointment}
                />
                <MonthView startDayHour={9} endDayHour={17} />
                <AllDayPanel />

                <EditRecurrenceMenu />
                <ConfirmationDialog />
                <Appointments />
                <AppointmentTooltip showOpenButton showDeleteButton />
                <AppointmentForm />
                <CurrentTimeIndicator />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
            </Scheduler>
        </Paper>
    );
}
