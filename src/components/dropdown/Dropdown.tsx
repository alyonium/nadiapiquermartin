import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <span className='label-lg'>ru</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            New Tab <div>⌘+T</div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
