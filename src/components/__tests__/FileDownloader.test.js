import {fireEvent, render, screen} from '@testing-library/react';
import FileDownloader from '../FileDownloader';

const mockFiles = [
    {
        name: 'test-file-1',
        device: 'device-1',
        path: 'path-1',
        status: 'scheduled'
    },
    {
        name: 'test-file-2',
        device: 'device-2',
        path: 'path-2',
        status: 'scheduled'
    },
    {
        name: 'test-file-3',
        device: 'device-3',
        path: 'path-3',
        status: 'scheduled'
    },
    {
        name: 'test-file-4',
        device: 'device-4',
        path: 'path-4',
        status: 'scheduled'
    },
    {
        name: 'test-file-5',
        device: 'device-5',
        path: 'path-5',
        status: 'scheduled'
    }
];

beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
});

describe('FileDownloader follows the specified requirements', () => {
    it('Only files that have a status of "available" are currently able to be downloaded.', () => {
        render(<FileDownloader files={mockFiles} />);
        fireEvent.click(screen.getByTestId("test-file-1-row")); //Click file row that should be disabled
        fireEvent.click(screen.getByText(/download selected/i)); //Click download button
        expect(window.alert).toHaveBeenNthCalledWith(1,"You must select at least one file to download.") //Verify file wasn't selected/downloaded
    });

    //TODO Add more tests when time allows
});