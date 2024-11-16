import { WidgetView } from '../../Components/Views/WidgetView';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import dayjs from 'dayjs';
import { SettingsManager } from '../../Services/Config';

export const ConfigView = () => {
  const { service, createdAt } = useInitialState();

  return (
    <WidgetView sx={{ mt: 3 }} title={'Config'}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'Service name'} value={service.name} />
        <BaseInfoRowView name={'Service host'} value={service.host} />
        <BaseInfoRowView name={'Service repository'} value={service.repository} />
        <BaseInfoRowView
          name={'Report created at'}
          value={dayjs(createdAt).format(SettingsManager.apiDateTimeFormat)}
        />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};
