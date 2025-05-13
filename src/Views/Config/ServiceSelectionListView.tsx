import { BoxView } from '../../Components/Views/BoxView';
import { List } from '@mui/material';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { ServiceSelectionListItem } from '../../Components/ListItems/Config/ServiceSelectionListItem';
import { EmptyView } from '../../Components/Views/EmptyView';
import { SearchTextField } from '../../Components/TextFields/SearchTextField';
import { FC, useMemo, useState } from 'react';
import { Service } from '../../Models/Config/Config';

type Props = {
  onSelectServiceCallback?: () => void;
};

export const ServiceSelectionListView: FC<Props> = ({ onSelectServiceCallback }) => {
  const { service, services, setService } = useInitialState();
  const [search, setSearch] = useState('');

  const filteredServices = useMemo(
    () => services.filter((service) => service.name.toLowerCase().includes(search.toLowerCase())),
    [search, services]
  );

  const onSelectService = (service: Service) => {
    setService(service);

    if (onSelectServiceCallback) {
      onSelectServiceCallback();
    }
  };

  return (
    <BoxView title={'Services'} containerSx={{ mt: 0 }}>
      {services.length === 0 && <EmptyView title={'Empty services'} description={'There is no services to select'} />}
      {services.length > 0 && (
        <SearchTextField sx={{ mt: 2 }} search={search} setSearch={setSearch} placeholder={'Search by name'} />
      )}
      <List dense>
        {filteredServices.map((item, index) => (
          <ServiceSelectionListItem
            key={index}
            service={item}
            selected={item.key == service.key}
            onSelectService={onSelectService}
          />
        ))}
      </List>
    </BoxView>
  );
};
