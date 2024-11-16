import { BoxView } from '../../Components/Views/BoxView';
import { List } from '@mui/material';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { ServiceListItem } from '../../Components/ListItems/Config/ServiceListItem';
import { EmptyView } from '../../Components/Views/EmptyView';

export const ServicesSettingsView = () => {
  const { service, services, setService } = useInitialState();

  return (
    <BoxView title={'Services'} containerSx={{ mt: 0 }}>
      {services.length === 0 && <EmptyView title={'Empty services'} description={'There is no services to select'} />}
      <List dense>
        {services.map((item, index) => (
          <ServiceListItem key={index} service={item} selected={item.key == service.key} onSelectService={setService} />
        ))}
      </List>
    </BoxView>
  );
};
