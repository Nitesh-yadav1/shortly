import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import shortenDesktopBG from "../../../assets/images/bg-shorten-desktop.svg";
import shortenMobileBG from "../../../assets/images/bg-shorten-mobile.svg";

const Container = styled.div`
	margin: 5rem 0rem;
	padding: 0rem 12rem;
	position: relative;
	top: -12rem;
	@media (max-width: 1250px) {
		padding: 0rem 3rem;
	}
`;

const FormContainer = styled.div`
	background-color: ${props => props.theme.primaryColor2};
	background-image: url(${shortenDesktopBG});
	background-size: cover;
	border-radius: 10px;
	padding: 6rem 5rem;
	position: relative;
	@media (max-width: 735px) {
		background-image: url(${shortenMobileBG});
	}
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
	@media (max-width: 735px) {
		flex-direction: column;
		margin-bottom: 0rem;
	}
`;

const Input = styled.input`
	padding: 1.8rem 1.5rem;
	height: 100%;
	width: 80%;
	border-radius: 5px;
	border: none;
	outline: none;
	&:focus {
		border: none;
		outline: none;
	}
	@media (max-width: 735px) {
		width: 100%;
		margin-bottom: 3rem;
	}
`;

const Error = styled.p`
	color: ${props => props.theme.secondaryColor};
	font-size: 1.4rem;
	font-style: italic;
	position: absolute;
	bottom: 3rem;
	left: 5rem;
`;

const ShortenButton = styled(Button)`
	padding: 1.8rem 1.5rem;
	width: 18%;
	margin: 0;
	@media (max-width: 735px) {
		padding: 1.5rem;
		width: 100%;
	}
`;

const Urls = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
	margin: 3rem 0rem;
	padding: 2rem 3rem;
	background-color: white;
	border-radius: 5px;
	@media (max-width: 735px) {
		flex-direction: column;
		align-items: stretch;
		padding: 0rem;
	}
`;

const FullUrl = styled.h4`
	font-size: 2rem;
	width: 50%;
	@media (max-width: 735px) {
		padding: 2rem;
		width: 100%;
		border-bottom: 1px solid ${props => props.theme.primaryLightColor};
	}
`;
const ShortContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 735px) {
		padding: 0rem 2rem 2rem 2rem;
		width: 100%;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: stretch;
	}
`;
const ShortUrl = styled.p`
	margin: 0rem 2rem;
	color: ${props => props.theme.primaryColor1};
	@media (max-width: 735px) {
		margin: 2rem 0rem;
	}
`;
const CopyButton = styled(Button)`
	font-weight: 700;
	background-color: ${props =>
		props.copied ? props.theme.primaryColor2 : props.theme.primaryColor1};
	&:hover {
		cursor: ${props => (props.copied ? "default" : "pointer")};
		background-color: ${props =>
			props.copied
				? props.theme.primaryColor2
				: props.theme.primaryLightColor};
	}
	@media (max-width: 735px) {
		margin: 0rem 0rem;
	}
`;

const UrlShortener = () => {
	const [url, setUrl] = useState("");
	const [shortenUrls, setShortenUrls] = useState([]);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState("");

	useEffect(() => {
		getShortenedUrlsFromStorage();
	}, []);

	const handleInput = e => {
		const { value } = e.target;
		setUrl(value);
	};

	const getShortenedUrlsFromStorage = () => {
		const stringifiedUrl = localStorage.getItem("shortenedURLs");
		if (stringifiedUrl === null) {
			return;
		}
		const urls = JSON.parse(stringifiedUrl);
		setShortenUrls(urls);
	};

	const shortenUrl = async ev => {
		ev.preventDefault();
		if (loading) {
			return;
		}
		try {
			if (url === "") {
				return setErr("Please add a link.");
			}
			setLoading(true);
			const res = await fetch(
				`https://api.shrtco.de/v2/shorten?url=${url}`
			);
			const data = await res.json();
			const urlData = {
				full: data.result.original_link,
				short: data.result.full_short_link,
				copied: false,
			};
			localStorage.setItem(
				"shortenedURLs",
				JSON.stringify([...shortenUrls, urlData])
			);

			setShortenUrls(prev => [...prev, urlData]);
			setLoading(false);
			setErr("");
			setUrl("");
		} catch (err) {
			setLoading(false);
			setErr("Something went wrong try again.");
			console.error(err);
		}
	};

	const copyUrl = async shortUrl => {
		try {
			await navigator.clipboard.writeText(shortUrl);
			setTimeout(
				() =>
					setShortenUrls(prev =>
						prev.map(url =>
							url.short === shortUrl
								? { ...url, copied: false }
								: url
						)
					),
				10000
			);
			setShortenUrls(prev =>
				prev.map(url =>
					url.short === shortUrl ? { ...url, copied: true } : url
				)
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<FormContainer>
				<Form onSubmit={shortenUrl}>
					<Input
						value={url}
						onChange={handleInput}
						name="url"
						placeholder="Shorten a link here ..."
					></Input>
					<ShortenButton filled type="submit">
						{loading ? "Shortening..." : "Shorten It!"}
					</ShortenButton>
				</Form>
				{err && <Error>{err}</Error>}
			</FormContainer>

			{shortenUrls.map(url => (
				<Urls key={url.short}>
					<FullUrl>{url.full}</FullUrl>
					<ShortContainer>
						<ShortUrl>{url.short}</ShortUrl>
						<CopyButton
							copied={url.copied}
							onClick={
								url.copied ? null : () => copyUrl(url.short)
							}
						>
							{url.copied ? "Copied" : "Copy"}
						</CopyButton>
					</ShortContainer>
				</Urls>
			))}
		</Container>
	);
};

export default UrlShortener;
