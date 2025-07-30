import { 
	Loader, 
	ErrorWrapper, 
	ResponseWrapper, 
	TitleWrapper, 
	DataWrapper,
	DataBoldLabel,
	SubTitleLabel
} from './SearchResults.styles';
import { useSelector } from 'react-redux';
import { CopyIcon } from '../CopyIcon/CopyIcon';

export const SearchResults = () => {
    const { error, bitcoinData, loading } = useSelector(state => state);

		const renderAddressDetails = () => {
			const { address, balance, transaction_count } = bitcoinData;

			return <ResponseWrapper>
				<TitleWrapper>Address Details</TitleWrapper>
				<DataWrapper>
					<DataBoldLabel>Address:</DataBoldLabel> 
					{address}
					<CopyIcon text={address}/>
				</DataWrapper>
				<DataWrapper> 
					<DataBoldLabel>Balance:</DataBoldLabel> 
					{balance}</DataWrapper>
				<DataWrapper>
					<DataBoldLabel>Transaction Count:</DataBoldLabel> 
				 	{transaction_count}</DataWrapper>
			</ResponseWrapper>;
		}

		const renderTransactionDetails = () => {
			const { hash, fee, inputs, outputs, transaction_index, block_time } = bitcoinData;

			return <ResponseWrapper>
				<TitleWrapper>Transaction Details</TitleWrapper>
				<DataWrapper>
					<DataBoldLabel>Hash:</DataBoldLabel> 
					{hash}
					<CopyIcon text={hash}/>
				</DataWrapper>
				<DataWrapper> 
					<DataBoldLabel>Fee:</DataBoldLabel> 
					{fee}</DataWrapper>
				<DataWrapper>
					<DataBoldLabel>Transaction Index:</DataBoldLabel> 
				 	{transaction_index}</DataWrapper>
				<DataWrapper>
					<DataBoldLabel>Block Time:</DataBoldLabel> 
				 		{block_time}
					</DataWrapper>
				<SubTitleLabel>Inputs</SubTitleLabel>
				{inputs.map((input, index) => (
					<DataWrapper key={index}>
						<DataBoldLabel>Address:</DataBoldLabel> {input.address} <DataBoldLabel>Amount:</DataBoldLabel> {input.amount}
					</DataWrapper>
				))}
				<SubTitleLabel>Outputs</SubTitleLabel>
				{outputs.map((output, index) => (
					<DataWrapper key={index}>
						<DataBoldLabel>Address:</DataBoldLabel> {output.address} <DataBoldLabel>Amount:</DataBoldLabel> {output.amount}
					</DataWrapper>
				))}
			</ResponseWrapper>;
		}
    const renderBitcoinData = () => {
			switch(bitcoinData?.type) {
				case 'address' :
					return renderAddressDetails();
				case 'transaction' :
					return renderTransactionDetails();
				default:  return null;
			}
    }

    if  (error){
        return <ErrorWrapper>{error}</ErrorWrapper>;
    } else if(loading){
        return <Loader />;
    } else {
        return renderBitcoinData();
    }
};