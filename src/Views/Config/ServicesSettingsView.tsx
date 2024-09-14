import { BoxView } from '../../Components/Views/BoxView';
import { List } from '@mui/material';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { ServiceListItem } from '../../Components/ListItems/Config/ServiceListItem';

export const ServicesSettingsView = () => {
  const { service, services, setService } = useInitialState();

  return (
    <BoxView title={'Services'} containerSx={{ mt: 0 }}>
      <List dense>
        {services.map((item, index) => (
          <ServiceListItem key={index} service={item} selected={item == service} onSelectService={setService} />
        ))}
      </List>
    </BoxView>
  );
};
